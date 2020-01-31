# Project-3-the-kitchen

## Overview

This project made up the third project of General Assembly's Software Engineering Immersive program. We were sorted into predefined teams and were instructed to build a full stack browser application.

We were required to:
​
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

We investigated some external APIs in order to provide the information that was required for the app. We ultimately decided, however to create our own information so that we can have full flexibility with the endpoints and the data serving.

Team mates [Michael](https://github.com/mjadair) and [Marissa](https://github.com/marepstein) offered to create the initial seed data, while I got to work forming the back-end logic.

We began by focussing on a single area of the app, mapping out what routes would be required. We then progressed to split the work up into 3 broad areas:

* [Michael](https://github.com/mjadair) looked at how best to sort and incorporate the recipe information on the front-end.
* [Marissa](https://github.com/marepstein) looked at a similar application with regards to the restaurants on the front end.
* I looked at integrating backend routes and rendering elements based on authentication and other conditionals on the front-end.

## Wireframes

(coming soon)

## Seeding

(coming soon)

## Features

It was important to keep the user experience seamless. We had previously used simple authenticated routes to display user specific information. We needed to expand on that creating paths for logged out users and authenticated users.

As I worked on the profile and log in routes, I realised that carrying user information across components could greatly assist with the personalisation features we had in mind. 

In order to achieve this securely, I investigated some of the newer hook features of React. I did not want to have to make a call to the backend on each page and I wanted the user information to be defined deeper in the component tree (login as opposed to on first visit). 

I decided to use the useContext hook to enable the user data to be stored and distributed at app level on the single login event. This enabled the users’ information to be referenced on any page, allowing for features like one click email and updated user personalisations on our information pages.

I then worked on features such as the add to profile favourites (with the ability for the add button to disabled once added to profile), the profile layout and links and the ability to make alterations to a user’s profile information.

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

Conditional buttons based on stored user information:

```
      {added ? <button className="button is-light" title="Disabled button" disabled>Added</button> : userInfo && info.username && <button className="button is-black" onClick={favourite} style={{ marginBottom: 20 }}>Save to Profile</button>} 
      

```

At this stage regular communication was conducted with the team member who was primarily working on the area of the app (recipe or restaurant) and any conflicts were resolved together.

The editing of comments was resolved by using useContext as well. Essentially, as the comments section was rendered by the recipe data but existed as a separate form, this data needed to be updated by a state that was available to multiple components. Once the comments were edited or deleted, the useContext info was updated with the response and then re-rendered in the higher level component providing a real-time change on the page.

```
      {reci && reci.comments.map((comments, i) => {
        return <CommentCard key={i} comments={comments} recipeInfo={data} setRecipeInfo={setData} isOwner={isOwner} props={props} />
      })}


```

Recipe information was set at a global level so that once altered in the form, the page would update immediately.

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






