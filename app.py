from flask import Flask, request, render_template

app = Flask(__name__)

final = ""


@app.route("/", methods=["GET", "POST"])
def index():
    return render_template("index.html")