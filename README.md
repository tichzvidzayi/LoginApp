# LoginApp
A web application login form using a Django Rest Framework backend and React Frontend.
Frontend
       - navigate to /frontend 
    Run: npm install
         npm start


Backend 
       - navigate to /backend/myproject
 create and activate virtual environment

  python -m venv venv
  source venv/bin/activate  # On Windows use `venv\Scripts\activate`
  pip install django
  django-admin startproject myproject
  cd myproject
  django-admin startapp myapp

    Run: 
     
       python manage.py migrate
       python manage.py createsuperuser
       python manage.py runserver 
