import requests
from bs4 import BeautifulSoup
import csv
import pandas as pd
import pymongo
import MongoDBKey
import pprint
import os


dict_list = []

# Connect To MongoDB
def connectToMongoDB(dict_list):

    dbname = "mydatabase"
    # -- Create Mongo DB
    key = MongoDBKey.MongoDBKey().mongoDB_key(dbname)
    myclient = pymongo.MongoClient(key)
    mydb = myclient[dbname]
    mycol = mydb['courses']
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

            dict["lecture_code"] = read_data[i+1].replace('\n', '')
            dict["lecture_title"] = read_data[i+3].replace('\n', '')
            dict["lecture_season"] = read_data[i+5].replace('\n', '')
            dict["teacher_name"] = read_data[i+6].replace('\n', '')

            if "前学期" in dict["lecture_season"]:
                dict["is_early_course"] = 1
            else:
                dict["is_early_course"] = 0
            dict_list.append(dict)
            local_number += 1


# 実行
# TODO: Open Campusmate1.html, Campusmate2.html, Campusmate3.html, Campusmate4.html
# 前期の分を収集
for i in range(4):
    filePath = '../scripts/courses/' + 'early_period' + '/Campusmate' + str(3-i) + '.html'
    if os.path.exists(filePath):
        with open(filePath, encoding='utf-8') as f:
            html = f.read()
        soup = BeautifulSoup(html, 'html.parser')

        soup_td_text = soup.find('td').text.split('No')[1].split('<!--')[0]
        writeOutputFile(soup_td_text)

        openFile()
    else:
        continue

# 後期の分を収集
for i in range(3):
    filePath = '../scripts/courses/' + 'latter_period' + '/Campusmate' + str(3-i) + '.html'
    if os.path.exists(filePath):
        with open(filePath, encoding='utf-8') as f:
            html = f.read()
        soup = BeautifulSoup(html, 'html.parser')

        soup_td_text = soup.find('td').text.split('No')[1].split('<!--')[0]
        writeOutputFile(soup_td_text)

        openFile()
    else:
        continue

for dict in dict_list:
    dict["like"] = 0
    dict["unlike"] = 0

print(dict_list)

new_dict_list = []

# deleted properties
deleted_lecture_names = []

for dict in dict_list:
    if "英語1" in dict["lecture_title"] or "英語2" in dict["lecture_title"] or "英語3" in dict["lecture_title"] or "英語4" in dict["lecture_title"] or "ドイツ語" in dict["lecture_title"] or "中国語" in dict["lecture_title"] or "初年次セミナー" in dict["lecture_title"] or "フランス語I" in dict["lecture_title"] or"フランス語II" in dict["lecture_title"]:
        print(dict["lecture_title"])
        deleted_lecture_names.append(dict["lecture_title"])
    else:
        new_dict_list.append(dict)


pprint.pprint(new_dict_list)
print(deleted_lecture_names)

# Connect To Database
connectToMongoDB(new_dict_list)