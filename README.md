<h1 align="center">📞 CALL SYSTEM</h1>

<img src="./src/Assets/gif.gif" alt="Image description">

> 🔎 The Call System or Call System is a tool used to centralize user demands. It serves to establish a management routine for these requests.

🗔 Check out the app: https://www.linkedin.com/in/kayke-fujinaka/

## :page_facing_up: Explanation

The project was carried out using the framework [ReactJs](https://pt-br.reactjs.org/docs/getting-started.html) connecting with [Firebase](https://firebase.google.com/docs) which helped with authentication, registration, login and data persistence.

🎲 **How ​​the Project Works**

It serves to establish a management routine available to the user, having some functionalities, such as, for example, creating a ticket, registering a company, editing ticket/customer information, editing the profile, etc.

The user can create clients or companies, which will be registered within the site, being able to create calls later.

If the user wants to register a call. He needs to put:

- Which customer needs this service. Thus, a list of some companies will appear;
- The subject that needs to be addressed or discussed;
- The status of the call, namely: In Open, In Progress or Answered;
- Complete that serves to better describe the problem, aiming to have a more effective communication (Optional).

⚠️ **Notes**

The visitor will not have access to private routes. If you have not registered or logged in to the site. Therefore, whenever he tries to access the URL without being registered/logged in, he will be redirected to the homepage.

In addition, the user will not be able to return to the home page when already logged in. Thus, he will need to log out on the Profile page to return to the Login or Registration screen.

## 📁 Pages

The site has a total of 5 pages, which are:

- **Login:** The page to login and access the site.
- **Registration:** The page that has the functionality to register users on the site and thus have access to other private pages.
- **Dashboard (Private):** The page that has the functionality to record tickets.
- **New Ticket (Private):** The page that has the function of adding a new ticket on the Dashboard.
- **Customers (Private):** The page that has the functionality to register a company, putting the company name, CPNJ and the company address.
- **Profile (Private):** The page that presents the information (name, email and avatar) of the registered user, which has the functionality to edit them, except for the email.

## 🎯 Steps

:heavy_check_mark: Global Project Styles\
:heavy_check_mark: Adding Firebase\
:heavy_check_mark: Login and Registration Page/Routes\
:heavy_check_mark: Login and Registration Structuring/Styling\
:heavy_check_mark: Dashboard Page/Route (Private Route)\
:heavy_check_mark: Context Created\
:heavy_check_mark: Importing Firebase Tools\
:heavy_check_mark: Login/Register functionality with Firebase\
:heavy_check_mark: Adding Toastify\
:heavy_check_mark: Header component\
:heavy_check_mark: Component Title\
:heavy_check_mark: User Profile Page/Route (Private Route)\
:heavy_check_mark: Profile Structuring/Styling\
:heavy_check_mark: Edit Profile\
:heavy_check_mark: Customers Page/Route (Private Route)\
:heavy_check_mark: Customers\ Structuring/Styling
:heavy_check_mark: Register a Company in Customers\
:heavy_check_mark: Dashboard Refactoring\
:heavy_check_mark: Dashboard Structuring/Styling\
:heavy_check_mark: New Page/Route (Private Route)\
:heavy_check_mark: Functions on the page for new tickets\
:heavy_check_mark: Option to search ticket in Dashboard\
:heavy_check_mark: Modal Structuring/Styling\
:heavy_check_mark: Edit ticket\
:heavy_check_mark: Finished Project
--- ⚙️ Extra ---\
:heavy_check_mark: Adding Styled-Components

## 🚀 Technologies

- [ReactJs](https://pt-br.reactjs.org/docs/getting-started.html)
- [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [AuthContext](https://blog.rocketseat.com.br/autenticacao-no-react-native-reactjs-com-context-api-hooks/)
- [Firebase](https://firebase.google.com/docs)
- [Styled Components](https://styled-components.com)
- [Date-fns](https://date-fns.org/docs/Getting-Started)

## :closed_book: How to use it?

Before starting, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

```bash
# Clone this project
$ git clone https://github.com/Kayke-Fujinaka/Call-System

# access
$ cd call-system

# install dependencies
$ yarn or npm

# Run the project
$ yarn start or npm start

# The server will initialize in the <http://localhost:3000>
```

## 🤝 Collaborators

Thanks to the following people who contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/98772000?s=400&u=80de9af672be7f75cc7a546838552cf63d5b82fe&v=4" width="160px;" alt="Photo by Kayke Fujinaka on GitHub"/><br>
        <sub>
          <b>Kayke Fujinaka</b>
        </sub>
      </a>
    </all>
  </tr>
</table>

## 📝 License

This project is under license. See the [LICENSE](LICENSE.md) file for more details.

&#xa0;

<a href="#top">Go back to top</a>
