import React from 'react';
import {Link} from 'react-router-dom';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const Home = ({data: {loading, error, mountains}}) => {
  if (error) return <h1>Yo, Error fetching mountains!</h1>;
  if (mountains) {
    return (
      <section>
        <ul className="Home-ul">
          {mountains.map(mountain => (
            <li className="Home-li" key={`mountain-${mountain.id}`}>
              <Link to={`/mountain/${mountain.id}`} className="Home-link">
                <div className="Home-placeholder" />
                <h3>
                  {mountain.title} <small>{mountain.elevation} ft</small>
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  return <h2>Loading mountains...</h2>;
};

export const mountains = gql`
  {
    mountains(orderBy: abbreviation_DESC) {
      id
      abbreviation
      elevation
      title
    }
  }
`;

export default graphql(mountains, {
  props: ({data}) => ({
    data,
  }),
})(Home);
