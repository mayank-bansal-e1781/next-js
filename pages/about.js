import Head from 'next/head';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch'
const Page = (props) => {
  const router = useRouter();

  return (
    <div>
       <Head>
        <title></title>
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

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
      <section>
        <div className="container mt-lg-5">
            <div className="row">
                <div className="col-md-5">
                    <img src={props.data.Poster} alt="" className="src"/>
                </div>
                <div className="col-md-7">
                    <h3 className="movie-title">
                        Title: 
                    </h3>
                    <p className="movie-desc">
                        Sypnosis: 
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
    
    return {
      data: data
    };
};

export default Page;