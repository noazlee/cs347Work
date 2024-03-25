from sqlite3 import OperationalError
from flask import Flask
from flask import render_template
import random
import json

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template("index.html")

@app.route('/<operation>/<x>/<y>')
def rand(x, y, operation):
    #Input values that come from a URL (i.e., @app.route)
    #   are always strings so I need to convert the type to int
    x = int(x)
    y = int(y)
    inputs = [x,y]
    question = operation 
    answer = None

    if question == "plus":
        answer = x + y
    elif question == "minus":
        answer = x - y
    elif question == "times":
        answer = x * y
    elif question == "divide":
        answer = round((x/y),2)
    else:
        answer = None
    
    json_answer = {
        "Question":question,
        "Inputs":inputs,
        "Answer":answer 
    }

    return json.dumps(json_answer)

if __name__ == '__main__':
    my_port = 5128
    app.run(host='0.0.0.0', port = my_port) 
