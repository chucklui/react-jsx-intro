'use strict';

function App() {
  return (
    <div>
      <Tweet
        username="username123"
        name="Brendan"
        date="2/28/2022"
        message="This is the tweet" />
      <Tweet
        username="chuck123"
        name="Chuck"
        date="2/29/2022"
        message="I'm speaking from the future" />
      <Tweet
        username="user1"
        name="First user ever"
        date="2/28/1990"
        message="First tweet" />
    </div>
  )
}