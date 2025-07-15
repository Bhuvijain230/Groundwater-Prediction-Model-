from flask import Flask,request, jsonify
from flask_cors import CORS
from config import MODEL_PATH


app = Flask(__name__)
CORS(app)




@app.route('/')
def home():
    return jsonify({
        "message":"Backend Running",
        "model_path": MODEL_PATH
        })



if __name__ == '__main__':
    app.run(debug=True)