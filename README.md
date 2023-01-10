## For Faks

After several hours of struggles, I still didn't manage to install Ruby 2.7.0 on my MacOS.

However, I did set up every functionalities as if there is an backend server running on localhost:3000, e.g. RTK Query.

The parts that needs a functionning API are silenced in /\* \*/ blocks so we don't get drown in errors. Therefore, there are only some messages in the console when you clicking buttons...

To show something on the screen, I used some dummy data (acquired from API document). They are stored in /src/fakeData folder.

## Structure

#### Index Page

1. Link (button) to the page dedicated for creating new claim
2. Search
   Searching functionality doesn't make much sense with the limited dummy data I used. But if there is API, I will use reducer (something like updateFilter()) of claimsSlice to search for the claim based on id/lab name.
3. All the claims
   Claims are displayed with pharmacy name & address, lab name, as well as a button to go to Show Page

#### Show Page

1. Pharmacy infos
2. Lab infos
   The picture is not available since there's no backend server
3. All the messages
4. A form to send message
5. A link to go back to Home Page

#### Create New Claim

1. Forms that ask for lab id and message (user & pharmacy id is set to 1)
2. A link to go back to Home Page
