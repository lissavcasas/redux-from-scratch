import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from '../../components/Navbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './results-styles.css';

const ResultsPage = (props) => {

  const { results, goTo } = props;

  const isEmpty = results.length === 0;

  return (
    <Fragment>
      <CssBaseline />
      <Navbar />
      <div className="results-page">
        {isEmpty ?
          <Typography variant="h5" component="h3" className="page-message">
            There are no results
        </Typography> :
          results.map(item =>
            <div key={item.id}
              className="card-container">
              <Card className="card"
                onClick={() => goTo(`/details/${item.id}`)}>
                <CardActionArea>
                  <CardMedia
                    className="card-media"
                    image={item.image}
                    title={item.title} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography component="p">
                      {item.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>)}
      </div>
    </Fragment>
  )
}

export default ResultsPage;