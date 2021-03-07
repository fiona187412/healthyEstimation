# coding=utf-8

'''
author：pengli
Email：pengli19971220@163.com

data：2020/11/17 16:10
'''

from flask import Flask, request, render_template
import pickle
# from fancyimpute import SimpleFill
import numpy as np

app = Flask(__name__)

model = pickle.load(open('lgb_model.pkl', 'rb'))
# imputed_model = pickle.load(open('simplefill_model.pkl', 'rb'))

@app.route('/')
def hello_world():
    return render_template("./cardiovascular_disease_predict_2.html")


@app.route('/predict', methods=['POST', 'GET'])
def predict():
    int_features = [int(x) for x in request.form.values()]
    final = [np.array(int_features)]
    print(int_features)
    print(final)
    # final_1 = SimpleFill.fit_transform(final)
    prediction = model.predict_proba(final)
    output = '{0:.{1}f}'.format(prediction[0][1], 2)

@app.route('/test', methods=['POST', 'GET'])
def test():
    return 'test'
if __name__ == '__main__':
    app.run(debug=True)