from flask import Flask, request, jsonify, render_template, redirect, url_for, session
import hashlib
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with a strong secret key for session security

# File to store user credentials
USER_DB = "users.txt"

# Hash passwords
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

# Register user
@app.route('/register', methods=['POST'])
def register():
    username = request.form.get('username')
    password = request.form.get('password')
    
    if not username or not password:
        return jsonify({'message': 'Username and password are required!'}), 400
    
    if os.path.exists(USER_DB):
        with open(USER_DB, 'r') as f:
            for line in f:
                existing_user, _ = line.strip().split(":")
                if existing_user == username:
                    return jsonify({'message': 'Username already exists!'}), 400
    
    with open(USER_DB, 'a') as f:
        f.write(f"{username}:{hash_password(password)}\n")
    
    return jsonify({'message': 'Registration successful!'}), 201

# Login user
@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')
    
    if os.path.exists(USER_DB):
        with open(USER_DB, 'r') as f:
            for line in f:
                existing_user, hashed_password = line.strip().split(":")
                if existing_user == username and hashed_password == hash_password(password):
                    session['username'] = username
                    return jsonify({'message': 'Login successful!'}), 200
    
    return jsonify({'message': 'Invalid username or password!'}), 401

# Secured page
@app.route('/secured', methods=['GET'])
def secured():
    if 'username' in session:
        return render_template('secured.html', username=session['username'])
    return redirect(url_for('index'))

# Home page
@app.route('/')
def index():
    return render_template('index.html')

# Logout
@app.route('/logout', methods=['GET'])
def logout():
    session.pop('username', None)
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run(debug=True)
