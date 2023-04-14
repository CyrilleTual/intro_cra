import React from 'react'

const Title = ({ heading, text }) => {
            if (heading === "h1") {
                return (
                    <h1>{text}</h1>
                )
            }
            if (heading === "h2") {
                return (
                    <h2>{text}</h2>
                )
            }
        }

export default Title