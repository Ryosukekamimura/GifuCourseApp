import requests
from bs4 import BeautifulSoup
import csv
import pandas as pd
import pymongo
import mongoDB_key

# Connect To MongoDB
def connectToMongoDB(dict_list):
    # -- Create Mongo DB
    key = mongoDB_key.MongoDBKey().mongo_db_key()
    myclient = pymongo.MongoClient(key)
    mydb = myclient["mydatabase"]
    mycol = mydb["gifu_courses"]
    x = mycol.insert_many(dict_list)
    print(x)


# Output Text File
def writeOutputFile(output_text):
    output_file = open('outputFile2.txt', 'w')
    output_file.write(output_text)
    output_file.close()

# Read Text File
def openFile():
    with open('outputFile2.txt', 'rt', encoding='utf-8') as f:
        read_data = list(f)
    addListDictonary(read_data=read_data, number=number)
    print(read_data)

# Add List Dictionary
def addListDictonary(read_data, number):
    local_number = 0
    for i in range(len(read_data)):
        search_number = "{0}\n".format(local_number)

        if read_data[i] == search_number:
            dict = {}
            dict["_id"] = number
            dict["講義コード"] = read_data[i+1].replace('\n', '')
            dict["講義名"] = read_data[i+3].replace('\n', '')
            dict["開講時期"] = read_data[i+5].replace('\n', '')
            dict["担当教員"] = read_data[i+6].replace('\n', '')

            dict_list.append(dict)
            local_number += 1
            number += 1

dict_list = []
number = 1

# TODO: Open Campusmate1.html, Campusmate2.html, Campusmate3.html, Campusmate4.html
for i in range(4):
    with open('../scripts/cources/Campusmate' + str(i) + '.html', encoding='utf-8') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')

    soup_td_text = soup.find('td').text.split('No')[1].split('<!--')[0]

    writeOutputFile(soup_td_text)

    openFile()


connectToMongoDB(dict_list=dict_list)
print(dict_list)








