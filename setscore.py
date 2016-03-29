#!C:\Python33\python.exe -u

import cgi
import cgitb
import sqlite3

cgitb.enable()

print("Content-type: text/html")
print()

conn = sqlite3.connect("Scores.db")
c = conn.cursor()
form = cgi.FieldStorage()

if "name" in form and "score" in form:
    name = form["name"].value
    score = form["score"].value
    c.execute("""INSERT INTO SCORES VALUES
              (?, ?)""", (name, score))
    conn.commit()
    
elif "name" in form:
    name = form["name"].value
    c.execute("SELECT SCORE FROM SCORES WHERE NAME = '%s'" % name)
    playerscore = c.fetchone()
    print(playerscore)

