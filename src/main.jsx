import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/styles/index.css"
import { BrowserRouter as Router } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { Notifications } from "@mantine/notifications"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <MantineProvider
        theme={{
          fontFamily: "sans-serif",
          primaryColor: "violet",
          colors: {
            violet: ['#f2ebf7', '#d8c0e6', '#c5a2da', '#ab77c9', '#8134af', '#752f9f', '#471d60', '#36164a']
          }

        }}
      >
        <App />
        <Notifications></Notifications>
      </MantineProvider>
    </Router>
  </React.StrictMode>,
)
