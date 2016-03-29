#!C:\Python33\python.exe -u

import cgi
import cgitb
import sqlite3

cgitb.enable()

print("Content-type: text/html")
print()

conn = sqlite3.connect('scores.db')
c = conn.cursor()
c.execute('select * from scores')
for row in c:
	print(row)
	print('<br>')
