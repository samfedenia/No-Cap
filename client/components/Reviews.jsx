import React from 'react';
import { connect } from 'react-redux';
import { addReview } from '../store/storeComponents/addReview';
import authentication from './utils/authentication';
// import './styles/Reviews.css';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      stars: 0,
      body: '',
      user: {},
      // reviews: 0,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    // const { stars, body } = this.props.product.reviews;
    // const reviews = this.props.product.reviews.length;
    // this.setState({ stars, body, reviews });
    const token = window.localStorage.getItem('token');
    const user = await authentication(token);
    this.setState({ user });
  }

  // componentDidUpdate(prevProps, prevState) {
  // console.log(prevState.product.reviews.length);
  // console.log(this.state.length);
  // if (
  // prevState.product.reviews.length !== this.state.product.reviews.length
  // ) {
  // this.forceUpdate();
  // }
  // }

  onChange(ev) {
    console.log(this.state.user.id);
    this.setState({ [ev.target.name]: ev.target.value });
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.props.addReview(
      this.props.product.id,
      this.state.user.id,
      this.state.stars,
      this.state.body
    );
    // const newReviews = this.state.reviews + 1;
    // this.setState({ reviews: newReviews });
  }

  render() {
    const singleProduct = this.props.product;
    const { stars, body } = this.state;
    const { onChange, onSubmit } = this;
    return singleProduct ? (
      <form action="submit" onSubmit={onSubmit}>
        <div>
          <table>
            <tbody>
              <tr>
                <th>
                  <input
                    type="number"
                    min="0"
                    max="5"
                    step="1"
                    label="star review"
                    value={stars}
                    onChange={onChange}
                    name="stars"
                  />
                </th>
                <td>
                  <textarea
                    rows="1"
                    cols="100"
                    label="body review"
                    value={body}
                    onChange={onChange}
                    name="body"
                  />
                </td>
                <td>
                  <button type="submit">Submit</button>
                </td>
              </tr>
              {singleProduct.reviews.map((review) => {
                return (
                  <tr key={review.id}>
                    <th>{review.stars}</th>
                    <td>
                      {/* {console.log(review.user)}  */}
                      {review.body} -{' '}
                      {review.user ? review.user.firstName : 'Anonymous'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </form>
    ) : (
      'Loading'
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (productId, userId, review, body) => {
      dispatch(addReview(productId, userId, review, body));
    },
  };
};

export default connect(null, mapDispatchToProps)(Reviews);
