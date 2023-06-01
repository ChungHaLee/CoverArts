from flask import Flask, render_template, request
import os

app = Flask(__name__)





## 필요한 함수 선언 

@app.route('/')
def mainpage(): 
    return render_template('index.html')




if __name__ == '__main__':
  app.run(host=os.getenv('IP', '0.0.0.0'), port=int(os.getenv('PORT', 2000)), debug=True, use_reloader=False)