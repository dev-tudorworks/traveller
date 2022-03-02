# Traveller x Tudor - Smart front end take-home technical test

## App description

1.  Allows the user to search for cities using the provided input. ✓
2.  Displays the cities found on the home page. ✓
3.  Allows the user to set the visited/wishlist state of a city to `true`/`false` via API requests. ✓
4.  Cities that have visited/wishlist set to `true` appear on their respective pages. ✓

## Install and run

```
npx lerna bootstrap
yarn start:all
```

## Info

### API

A GraphQL API was used - it is my first attempt at this - please be kind. I used the documentation found here:

- GraphQL - [http://localhost:4000/graphql](http://localhost:4000/graphql)

### Client

After running the client you will find a home page with an input field that is functional as well an empty wish list and visited pages.

I used a few packages from what you provided:

- GraphQL [Apollo Client](https://www.apollographql.com/docs/react).
- The Chakra component library [Chakra UI](https://chakra-ui.com).

I did not add any testing as I wanted to focus on the other parts and because I did not feel that comfortable adding it in the end.

## What I hope I proved

- A solid understanding and use of abstractions where they make sense (DRY).
- Some sensible choices regarding performance, although the pagination needs a lot more work.
- An reasonably accessible solution or at least with a few good examples of it.
- A decent use of TypeScript, although I never really used it and only did a course a while back.
- But most importantly, I hope I proved that I can find a solution and apply technologies and techniques I never really used (GraphQL, TypeScript, Chakra, accessibility) with ease, and that I can adapt quickly to any sort of task. It's why I believe I’ve never had a problem I couldn’t solve. And why I'm still looking for one.
