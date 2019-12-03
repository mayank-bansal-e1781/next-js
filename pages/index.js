
import React from 'react';
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

class Index extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            data: [],
            error: ''
        }
    }


    handleClick = () =>{
        fetch(`http://www.omdbapi.com/?apikey=eb035411&s=${this.state.input}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            this.setState({
                data: Array.from(data['Search']),
                error: ''
            })
        })
        .catch((err)=>{
            this.setState({
                error: 'No Movie found'
            })
        })
    }

    handleChange = (e) =>{
        this.setState({
            input: e.target.value       
        })
    }
    render () {
        return (
        <div>
            <Head>
                <title>My page title</title>
                <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
                />
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
            </Head>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Movie Search powered by Next JS</h1>
                    <p className="lead">This is sample test app build and it uses Online movie database API</p>
                    <style jsx>
                       {
                           `
                            input {
                                display: inline-block;
                                width: 500px;
                            }
                           `
                       }

                    </style>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" value={this.state.input} onChange={this.handleChange} />
                    <button className="btn btn-outline-primary" type="submit" onClick={this.handleClick} >Search</button>
                </div>
            </div>    
            <div className="container">
            <style jsx>{`
                .img-responsive {
                max-height: 400px;
                }
            `}</style>
                {
                    this.state.error.length? <div className="error">No Movie found</div>: 
                    <div className="row">
                        {
                            this.state.data.map((movie, i)=>{
                                if (movie['Poster'] !="N/A") {
                                    return (
                                        <div className="col-md-3" key={i}>
                                            <img className="img-responsive" src={movie['Poster']}/>
                                            <h2><a href={`/about?id=${movie['imdbID']}`}>{movie['Title']}</a></h2>
                                            <p>Year: {movie['Year']}</p>
                                        </div>
                                    )
                                } else return null;
                            })
                        }
                    </div>
                }
            </div>
        </div>
        )
    }
}


export default Index