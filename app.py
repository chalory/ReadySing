from flask import Flask, request, render_template

app = Flask(__name__)

final = ""


@app.route("/", methods=["GET", "POST"])
def index():
    return render_template("index.html")


@app.route("/meditation", methods=["GET", "POST"])
def meditation():
    return render_template("meditation.html")


@app.route("/diary", methods=["GET", "POST"])
def diary():
    return render_template("diary.html")



@app.route("/warmup", methods=["GET", "POST"])
def warmup():
    return render_template("warmup.html")


if __name__ == "__main__":
    app.run(debug=True)
