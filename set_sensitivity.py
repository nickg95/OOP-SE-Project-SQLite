#!C:\Python33\python.exe -u

import cgi
import cgitb
import sqlite3

cgitb.enable()

print("Content-type: text/html")
print()

conn = sqlite3.connect("settings.db")
c = conn.cursor()
form = cgi.FieldStorage()

if "name" in form and "sensitivity" in form:
    name = form["name"].value
    sensitivity = form["sensitivity"].value
    c.execute("""INSERT INTO SETTINGS VALUES
              (?, ?)""", (name, sensitivity))
    conn.commit()
    
elif "name" in form:
    name = form["name"].value
    c.execute("SELECT SENSITIVITY FROM SETTINGS WHERE NAME = '%s'" % name)
    playsensitivity = c.fetchone()
    print(playsensitivity)
