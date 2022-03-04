import subprocess
import pandas as pd
import os
from flask import Flask

app = Flask(__name__)
def run(cmd):
    completed = subprocess.run(cmd)
    return completed
@app.route('/mem')
def members():
    m ={'members':["mem1","mem2","mem3"]}
    return m
@app.route('/getForexPairs')
def forexPairs():
    pair = []
    ohandaPairs = pd.read_csv('./forex.csv')
    for x in ohandaPairs:
        pair.append(x)
    return x

#@app.route('/rbt')
#def RBT():
#   out = os.popen('lean ').read()
#   return (out)

if __name__ == "__main__" :
    app.run(debug=True)
