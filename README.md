# Spoofify

🚨 *Disclaimer: Please use for educational purposes only.*

A service that lets you [spoof emails](https://en.wikipedia.org/wiki/Email_spoofing) to `@uwaterloo.ca` email addresses.

This was created at [TerribleHacks V](https://terrible-hacks-4495.devpost.com) by [Anusan](https://github.com/anusans) and [Tasti](https://github.com/tasti), which won the **Hillary's Email Server** *(Best email application)* and **People's Choice** *(The people will have the chance to vote, to determine which idea is truly the most Terrible.)* awards.

# Usage:

You will need `node` (v6.8.1+) and `npm` installed on you computer.

#### 1) Clone this repository.

```
git clone https://github.com/tasti/spoofify
```

#### 2) In the `spoofify/` folder, install the dependent packages.

```
npm install
```

#### 3) Start the server (the part that sends the email).

Important:
- You must host the server on your own, i.e. http://spoofify.herokuapp.com won't work alone. (See instuctions below)
- The server must be within the University of Waterloo subnet, which can be done by:
  - Being there physically: https://goo.gl/maps/rW7R94vva4m
  - VPN: https://uwaterloo.ca/information-systems-technology/services/virtual-private-network-vpn
  - SSH: https://cs.uwaterloo.ca/cscf/howto/ssh/

```
npm run server
```

The server will be running on `http://localhost:8000`.

#### 4) Start the client (the part that lets you customize the email).

```
npm run client
```

The client will be running on `http://localhost:3000` (or you may use http://spoofify.herokuapp.com instead).

#### 5) Have fun!

Congratulations, you played yourself!
