import Head from 'next/head';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch'
const Page = (props) => {
  const router = useRouter();

  return (
    <div>
       <Head>
        <title>{props.data.Title}</title>
        <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
        />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        </Head>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }
        .movie-desc label {
          font-weight: 700
        }

        li {
          list-style: none;
          margin: 5px 0;
        }
      `}</style>
      <section>
        <div className="container mt-lg-5">
            <div className="row">
                <div className="col-md-5">
                    <img src={props.data.Poster} alt="" className="src"/>
                </div>
                <div className="col-md-7">
                    <p className="movie-desc">
                        <label>Title:</label> {props.data['Title']}
                    </p>
                    <p className="movie-desc">
                        <label>Plot:</label> {props.data['Plot']}
                    </p>
                    <p className="movie-desc">
                        <label>Release:</label> {props.data['Released']}
                    </p>
                    <p className="movie-desc">
                        <label>Genre:</label> {props.data['Genre']}
                    </p>
                    <p className="movie-desc">
                        <label>Director:</label> {props.data['Director']}
                    </p>
                    <p className="movie-desc">
                        <label>Writer:</label> {props.data['Writer']}
                    </p>
                    <p className="movie-desc">
                        <label>Actors : </label> <ol>
                        {props.data['Actors'].split(',').map((item, i)=>{
                          return <li key={i}>{item}</li>
                        })}
                        </ol>
                    </p>
                    <p className="movie-desc">
                        <label>Country :</label> {props.data['Country']}
                    </p>
                    <p className="movie-desc">
                        <label>IMDB RATING:</label> {props.data['imdbRating']}
                    </p>
                    <p className="movie-desc">
                        <label>Runtime:</label> {props.data['Runtime']}
                    </p>
                </div>
            </div>
        </div>    
      </section>
    </div>
  );
};

Page.getInitialProps = async function(props) {
    console.log(props.query.id);
    const res = await fetch(`http://www.omdbapi.com?apikey=eb035411&i=${props.query.id}`);
    const data = await res.json();
    console.log(data);
    return {
      data: data
    };
};

export default Page;