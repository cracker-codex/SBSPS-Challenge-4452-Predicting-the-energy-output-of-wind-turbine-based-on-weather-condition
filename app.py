from flask import Flask,request,abort,jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
def doProcess(windSpeed, windDirection):
    return ''

@app.route('/')
def index():
    return "Hello"

@app.route('/predict',methods=['POST'])
def predictValue():
    try:
        global windSpeed
        global windDirection
        print(request.json)
        windSpeed = float(request.json['windSpeed'])
        windDirection = float(request.json['WindDirection'])
        windGust = doProcess(windSpeed,windDirection)
        print(windSpeed, windDirection, windGust)
        return jsonify(output=200)
    except Exception as e:
        print("error",e)
        abort(400)
if __name__ == "__main__":
    app.run(debug=True)