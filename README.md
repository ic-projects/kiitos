# Kiitos
## Inspiration
At the moment donating to charities online is way too complex, and the websites take cuts, and you're not even sure if your money will reach them as the centralized website you go through has complete control over your money and on what charities you can donate to. We thought this needed a change!

## What it does
Kiitos is a platform that allows everyone to participate in fundraising without any risks or worries. Kittos is:

- **Decentralized**: Kiitos stores all its data about fundraisers on the public ethereum blockchain, anyone can view and read it, but interacting requires you to go through the smart contract controlling this data. This means that no one can tamper with the databases, and everyone can see the data and the logic that controls it.
- **Free**: We don't take any cuts or fees, ever. You can verify this by looking through the smart contract, the only extra charge you take is ~1 penny charged by the ethereum network. Anyone can create a fundraiser and anyone can donate.
- **Transparent**: Everyone can see the fundraisers, the contributors, and the exact amount raised. We don't have anymore control over the system than any other user, and companies know their funds are safe if they deposit funds for matching or donations.
- **Easy to use**: If a charity has a website, then you can start a fundraiser for them. For them to claim the amount raised at the end they are going to need an ethereum wallet, but they don't need one to start fundraising. This means all charities are supported on our platform. Companies can also set up automatic matching of donations by simply depositing ethereum to the fundraiser

## How we built it
We first started writing out exactly what we wanted the platform to do and how it would do them. Then we wrote and tested the smart contract while starting on the skeleton of the website. After finally getting the contract to work we all worked on the website, getting to work with the blockchain instead of a normal server was pretty tough!

## Challenges we ran into
Solidity has lots of restrictions with it, no floats, no string comparison, no passing arrays... And getting our website to get all its data from the blockchain is a concurrency nightmare!

## Accomplishments that we're proud of
Getting it to actually work and look nice in the process! And using oraclize to get data from the web to the smart contract securely.

## What we learned
We took on a very very big project and were very ambitious about it. We should've also brought some pillows.

## What's next for Kiitos
Adding more support for fundraising, like adding deadlines, goals, deletion and also had support for ssl verification of the charity website.
