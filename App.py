from flask import Flask, render_template, request
from flask_restful import Resource, Api, reqparse
import pandas as pd
import ast
import sqlite3

app = Flask(__name__)
api =Api(app)



con=sqlite3.Connection("characters.db",check_same_thread=False)



#Checks if name guessed in form is correct
def check(Guess_name):
    if Chararcter_selected.equals(pd.read_sql_query(("SELECT name FROM characters where name= (?)"), con, params=[Guess_name])):
        return True
    return False   

#selects random character from database
def dailyCharacterSelect():
    #pd.read_sql("SELECT name FROM charcters ORDER BY RAND() LIMIT 1;")
    pd.DataFrame=pd.read_sql("SELECT name FROM characters where name='Adele'",con)
    return pd.DataFrame

Chararcter_selected=dailyCharacterSelect()
data2=()

@app.route('/')
def index():
    display="none";
    lives=8
    Characters = con.execute('''SELECT name FROM characters''')
    return render_template('index.html',Characters=Characters,display=display,data2=data2,lives=lives)

# refreshes page sadly
@app.route('/', methods = ['POST'])
def form():
    
    Guess_name = request.form.get('Guess_name')
    if(check(Guess_name)):
        win=true
        #win condition send to function that will take bool values and stop request etc
        return win,200
    data=pd.read_sql_query(("SELECT * FROM characters where name= (?)"), con, params=[Guess_name])
    data=data.to_dict()
    # Fix pass tuple of tuple as param to add new tuple
    data2+=((data['name'][0],data['picture'][0],data['saga'][0],data['affiliation'][0]),)
    print(data2)
    print(data2)
    #lives=lives-1

    return render_template('index.html',data=data)


#character
# users_path = "SELECT * FROM characters"

# #take args from user and return whether it matches chosen character
# class Characters(Resource):
#     def get(self):
#         data=pd.read_sql(users_path,con)
#         data=data.to_dict()
#         return{'data':data},200

#     # pass score to post to social media?
#     def post(Self):
#         pass
# api.add_resource(Characters, '/characters')

if __name__=="__main__":
    app.run(debug=True)

con.close()