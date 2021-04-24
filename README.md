# reactweatherapp
An example weather app built using React

## Usage
Retrieve an API Key from [https://www.weatherapi.com/](https://www.weatherapi.com/)

Then set the API_KEY env variable into the `.env` file:
```sh
git clone https://github.com/mehtaarn000/reactweatherapp.git
cd reactweatherapp
touch .env
echo "API_KEY=MYAPIKEY" > .env
```

Then, install the dependencies:
```sh
cd client
npm install
cd ..
cd server
npm install
cd ..
npm start
```

Head to [http://localhost:3000/](http://localhost:3000) to see the magic happen!