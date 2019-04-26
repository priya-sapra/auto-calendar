Firebase Tutorial
-----------------

This application uses Firebase Cloud Firestore for the database. At first, I wasn't sure if I was going to use Cloud Firestore or Firebase's other service, Realtime Database. I did some reasearch and compared the two and Cloud Firestore has a lot more functionality and is much newer, so it seemed likte the better option. For example, Cloud Firestore lets you chain filters and combine filtering and sorting on a property in one single query (as explained [here](https://firebase.google.com/docs/firestore/rtdb-vs-firestore), whereas Realtime Database only allows you to filter or sort on a single query.

I followed along with [this tutorial](https://www.youtube.com/watch?v=ifOzAyR1cG4) to be able to start setting up the database for this Vue application. I would use the database to store all of the class information and related details for each class. 