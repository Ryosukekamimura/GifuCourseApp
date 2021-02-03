import requests
from bs4 import BeautifulSoup
import csv
import pandas as pd
import pymongo
import MongoDBKey


dict_list = []


# Connect To MongoDB
def connectToMongoDB(dict_list):

    dbname = "mydatabase"
    # -- Create Mongo DB
    key = MongoDBKey.MongoDBKey().mongoDB_key(dbname)
    myclient = pymongo.MongoClient(key)
    mydb = myclient[dbname]
    mycol = mydb["courses"]
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
    print(read_data)
    addListDictonary(read_data=read_data)


# Add List Dictionary
def addListDictonary(read_data):
    local_number = 1
    for i in range(len(read_data)):
        search_number = "{0}\n".format(local_number)

        if read_data[i] == search_number:
            dict = {}
            print("id -> {0}".format(local_number))
            dict["id"] = local_number
            dict["lecture_code"] = read_data[i+1].replace('\n', '')
            dict["lecture_name"] = read_data[i+3].replace('\n', '')
            dict["lecture_season"] = read_data[i+5].replace('\n', '')
            dict["teacher_name"] = read_data[i+6].replace('\n', '')

            dict_list.append(dict)
            local_number += 1



# TODO: Open Campusmate1.html, Campusmate2.html, Campusmate3.html, Campusmate4.html
for i in range(4):
    with open('../scripts/courses/Campusmate' + str(3-i) + '.html', encoding='utf-8') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')

    soup_td_text = soup.find('td').text.split('No')[1].split('<!--')[0]

    writeOutputFile(soup_td_text)

    openFile()

print("Not Connect to MongoDB")

count = 1
for dict in dict_list:
    dict["id"] = count
    dict["plus"] = 0
    dict["minus"] = 0
    count += 1

print(dict_list)

connectToMongoDB(dict_list=dict_list)





