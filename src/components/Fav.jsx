import { findByDisplayValue } from '@testing-library/react'
import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'


const Fav = () => {
    const fav = useSelector((state) => state.fav.content)
    const dispatch = useDispatch()
  
    return (
        <Row>
                <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {fav.map((book, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: 'FAV',
                    payload: i,
                  })
                }}
              >
                <FaTrash />
              </Button>
              <img
                className="book-cover-small"
                src={book.imageUrl}
                alt="fav selected"
              />
              {book.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="fw-bold mb-3 ms-4">
          TOTALE:{' '}
          {fav.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
          $
        </Col>
      </Row>
    </Row>
          )
        }
        
        export default Fav