from pymongo import MongoClient

client = MongoClient('mongodb+srv://ryanectaylor:Rt79NxRGbQA5Xw3w@flightdata.vsg9uxo.mongodb.net/')
db = client['QuikBook-DataBase']

accounts = db['accounts']
trips = db['trips']
flights = db['flights']
