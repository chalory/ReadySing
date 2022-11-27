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


@app.route("/warmup1", methods=["GET", "POST"])
def warmup1():
    return render_template("warmup1.html")


@app.route("/warmup2", methods=["GET", "POST"])
def warmup2():
    return render_template("warmup2.html")


@app.route("/drag_and_drop", methods=["GET", "POST"])
def drag_and_drop():
    return render_template("drag_and_drop.html")


if __name__ == "__main__":
    app.run(debug=True)
