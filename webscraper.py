import requests
from bs4 import BeautifulSoup
import sqlite3
import random
import re

def chapToSaga(chapter):
        if(chapter in range(1,100)):
                return "East Blue Saga"
        if(chapter in range(101,217)):
                return "Arabasta Saga"
        if(chapter in range(218,302)):
                return "Sky Island Saga"
        if(chapter in range(303,441)):
                return "Water 7 saga"
        if(chapter in range(442,489)):
                return "Thriller Bark Saga"
        if(chapter in range(490,597)):
                return "Summit War Saga"
        if(chapter in range(598,653)):
                return "Fish-man Island Saga"
        if(chapter in range(654,801)):
                return "Dressrosa saga"
        if(chapter in range(802,908)):
                return "Whole Cake Island saga"
        if(chapter in range(909,1057)):
                return "Wano Country Saga"

        return "Final saga"

#creating (if it doesn't already exist)and connecting to db

conn=sqlite3.connect('characters.db')
c = conn.cursor()

# c.execute('''DROP TABLE characters''') doesn't delete table from gitpod 
#try:
#       c.execute('''DROP TABLE characters''')
#except:
#       print(table already deleted)
#else:
#       c.execute('''DROP TABLE characters''')

# if table already exists it should error our of code

c.execute('''CREATE TABLE characters(name TEXT, picture TEXT, saga TEXT, affiliation TEXT, hint TEXT)''')

#webscraping fandom wiki for onepiece character info

wiki='https://onepiece.fandom.com/wiki/List_of_Canon_Characters'
soup=BeautifulSoup(requests.get(wiki).content,'html.parser')

# only returns 1st table of canon characters on onepiece fandom wiki
table1=soup.find('table').findAll('tr')

#takes only the name and chapter of introduction from the 1st table of canon characters (only first 50 for now)
#takes only first 4 as table 1 is large
details=[[j for j in i.findAll('td')[1:3]] for i in table1[1:50]]


wiki='https://onepiece.fandom.com'
for item in details:
        
        #rstrip() gets rid of \n in text
        name= item[0].text.rstrip()
        chapter= int(item[1].text)
        saga =chapToSaga(chapter)

        #gets character specific wiki
        soup=BeautifulSoup(requests.get(wiki+item[0].find("a").get('href')).content,'html.parser')
        
        # For those that have no affiliation also gets rid of afiliation if it is just [1] (occurs with links)
        try:
                affiliation=soup.find(attrs={"data-source":"affiliation"}).contents[3].find("a").text 
        except:
                affiliation=None
        else:
                affiliation=soup.find(attrs={"data-source":"affiliation"}).contents[3].find("a").text 
                if(affiliation== "[1]"): 
                        affiliation=None
        
        pic=soup.find("figure","pi-item pi-image").find("a").get("href")
        try:
                hintList=soup.find_all("p",string=re.compile(name))
        #If there is no p on thier page
        except (IndexError):
                hint="";
        # if there are no sentences on the character wiki with thier name        
        except:
                hintList=soup.find_all("p")
                hint=random.choice(hintList).text

        else:
                hintList=soup.find_all("p",string=re.compile(name))
                hint_exposed=random.choice(hintList).text
                hint=hint_exposed.replace(name,"___")
        

        #adding character data to database
        c.execute('''INSERT INTO characters VALUES(?,?,?,?,?)''',(name,pic,saga,affiliation,hint))
        conn.commit()

#prints table
c.execute('''SELECT * FROM characters''')
results =c.fetchall()
print(results)

# doesn't delete table from gitpod
c.execute('''DROP TABLE characters''')

#closes database
conn.close()