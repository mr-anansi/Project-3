# Project-3-the-kitchen

## Overview

This project made up the third project of General Assembly's Software Engineering Immersive program. We were sorted into predefined teams and were instructed to build a full stack browser application.

We were required to:

* Work in a team, using git to code collaboratively
* Build a full-stack application by making your own backend and your own front-end
* Use an Express API to serve our data from a Mongo database
* Handle API requests with a separate front-end built with React

The resulting application titled 'the-kitchen' was constructed with team members [Michael](https://github.com/mjadair) & [Marissa](https://github.com/marepstein).
​
## Installation

We used Node Package Manager to install all of our dependencies.

When running this project in a local environment, run `npm install` in the CLI to ensure all dependencies are present before launch.

​
## Technologies used

#### Front-end

* HTML5
* SCSS
* JavaScript (ES6)
* React.js

#### Back-end

* Node.js
* Express.js
* MongoDB

#### Additional Libraries

* Bulma
* React Hooks, Animations
* Emailjs
* Toastify

#### Bundler

* Webpack

## Approach

### Technical change

We had largely been taught React in the form of class and simple components up until this point, however, we had been introduced to the concept of hooks a couple days prior to the project start date.

We took the opportunity to display our progress with the new format of code construction and built the majority of our components in the new format. 

Previous class component snippet (from project 2):

```

class Input extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      postcode: null,
      errors: '',
      export: {
        longitude: null,
        latitude: null
      }
    }
  }

  handleChange(e) {
    const postcode = (e.target.value).replace(/\s/g, '')
    this.setState({
      postcode: postcode,
      errors: ''
    })
  }

```

Example of the different format our components took with hooks (cuurent project):


```
const EditProfile = (props) => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})

  const { userInfo, setUserInfo } = useContext(UserContext)

  useEffect(() => {
    if (userInfo) {
      setData(userInfo)
    }
  }, [userInfo])

  const sendUpdates = () => {
    axios.put('/api/profile/edit', data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        setUserInfo(res.data.user)
        props.history.push('/profile')
      })
      .catch(err => {
        setErrors(err.response.data.errors)
      })
  }


```

### Methodology

We began this project with a brainstorming document that took into account the areas we were interested in and the ideas we were interested in fleshing out. 

Our ideas ranged around the arts and we eventually settled on a food-focussed app with team-members [Michael](https://github.com/mjadair) and [Marissa](https://github.com/marepstein) particularly passionate about any research involved! 

Our goal was to create something that would address one’s food needs, whether in a foodie state of mind or otherwise. Our stretch goal was to have a user funnel that was guided by matching the users personalisations to our data.

We investigated some external APIs in order to provide the information that was required for the app. We ultimately decided, however to create our own information so that full flexibility could be established with our endpoints.

In order to ensure we had enough data for the user to be able to sort through, we decided to get to work on seeding the data first. 

Once this was done we concentrated on getting our backend routes and data delivery done first, before moving on to the front end.

## Wireframes

(coming soon)

## Seeding

Since we were relying on no external data sources, we had a task on our hands to create the data that users would be able to cycle through. As this was a curation app, we wanted to be able to provide specific results, yet have enough options for the user to experience a large enough degree of choice.

The seeding data was separated into two categories and the data in JSON format was built out. 

In order to create the user-data relationship, an allocation for the user in the restaurant and recipe data was created. 

In an attempt to categorize and edit the data faster, the seeding file was customised, allowing a single user to be created and attached to the first type of data, before using the same user to create the second file.

Seed file snippet:

```

```

This enabled two large files to be created separately.

## Features

It was important to keep the user experience seamless. We had previously used secure routes to deliver user simple information to the specific user who created it.  This was expanded on by creating paths for both logged out users and authenticated users.

In order to work towards personalisation, methods of user information sharing were looked into.

there was an investigation into some of the newer hook features of React with security of the user information a prime concern. We wanted to reduce the calls to the backend while defining the user information deeper in the component tree (login as opposed to on the first visit). 

Ultimately we used the useContext hook to enable the user data to be stored and distributed at app level on a single login event. This enabled the users’ information to be referenced on any page, allowing for features like one click email and updated user personalisations on our information pages with a single user information call to the backend. To tackle the problem of a loss of state on refresh, a conditional call (based on the availability of the jwt token) was built in at app level. This ensured that the call only ran when a user had logged in and refreshed the page.

Example code:

```


```

We used the hook for features such as the add to profile favourites (with the ability for the add button to disabled once added to profile), the profile layout and links and the ability to make alterations to a user’s profile information.

```
const favourite = (props) => {
    const update = info.favouriteRecipes
    update.push(data)
    setInfo({ ...info, favouriteRecipes: update })
    axios.put('/api/profile/edit', info, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        setUserInfo(res.data.user)
      })
      .catch(() => {
        props.history.push('/login')
      })
  }

```

Conditional buttons based on the user's useContext hook information:

```
      {added ? <button className="button is-light" title="Disabled button" disabled>Added</button> : userInfo && info.username && <button className="button is-black" onClick={favourite} style={{ marginBottom: 20 }}>Save to Profile</button>} 
      

```

The editing of comments was resolved by using useContext as well. Essentially, as the comments section was rendered by the recipe page but existed as a separate form, this data needed to be updated by a state that was available to both components. Once the comments were edited or deleted, the useContext recipe info was updated with the response and then the page was re-rendered in the higher level component providing a real-time change on the page.

```
      {reci && reci.comments.map((comments, i) => {
        return <CommentCard key={i} comments={comments} recipeInfo={data} setRecipeInfo={setData} isOwner={isOwner} props={props} />
      })}


```


Here the page information is updated within a deeper component (form):

Globally set:

```
  const { reci, setReci } = useContext(ReciContext)

```

Updated in form:

```
  const handleDelete = () => {
    axios.delete(`/api/recipes/${recipeInfo._id}/comments/${comments._id}/`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        setReci(res.data)
      })
      .catch(err => console.log(err))
  }

```


In other areas of the app, the new recipe form provided the challenge of adding multiple inputs into an array for a single field. This was achieved through coercing the changing form information into an array using the input index. Take a look at the example:

The change handler would create and maintain the data in array format:

```

  const handleMultiChange = (e, i) => {
    data[e.target.name][i] = e.target.value
    setData({ ...data, [e.target.name]: data[e.target.name] }) 
    setErrors({})
  }

```

The amount of inputs would be generated according to the array length as the elements were mapped out:

```

data.ingredients.map((ingredient, i) => {
          return (
            <div key={i} className='field'>
              <div className='control'>
                <label htmlFor='' className="label has-text-white">
                  Add ingredient {i + 1}
                  <input onChange={(e) => handleMultiChange(e,i)} className='input is-info' type='text' name={'ingredients'} />
                </label>
              </div>

```

The add button would add another array value, thereby extending the array and creating another index:

```
const addItem = () => {
    setData({ ...data, ingredients: [...data.ingredients, '' ] })
  }

```

## Styling

(Coming soon)

## Categorization

(Coming soon)

## Bugs & Challenges

(Coming soon)

## Future Features

We would of liked to provide the guided path we had in mind at the initial stage, however time restricted us to the core library aspect as a deliverable. 

In our plans, the user could get more of the experience through progressing through the funnel. This way they would be guided to the best and fastest output relative to their saved preferences. 

In order to achieve the user path, we will need more work on the filter and UX aspects of the app. This may come in future iterations of the project.