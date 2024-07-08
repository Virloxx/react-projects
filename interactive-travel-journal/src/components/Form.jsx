import './Form.css';
import { useState, useId } from 'react'

export default function Form(props) {
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        googleMapsUrl: '',
        startDate: '',
        endDate: '',
        description: '',
        imageUrl: ''
    })

    const id = useId()

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.addCard(formData)
        setFormData({
            title: '',
            location: '',
            googleMapsUrl: '',
            startDate: '',
            endDate: '',
            description: '',
            imageUrl: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a new place!</h2>
            <label htmlFor={id + '-title'}>Title</label>
            <input 
                type="text"
                name="title"
                value={formData.title}
                id={id + '-title'}
                onChange={handleChange}
            />
            <label htmlFor={id + '-location'}>Location</label>
            <input 
                type="text"
                name="location"
                value={formData.location}
                id={id + '-location'}
                onChange={handleChange}
            />
            <label htmlFor={id + '-googleMapsUrl'}>Google Maps URL</label>
            <input 
                type="text"
                name="googleMapsUrl"
                value={formData.googleMapsUrl}
                id={id + '-googleMapsUrl'}
                onChange={handleChange}
            />
            <label htmlFor={id + '-startDate'}>Start Date</label>
            <input 
                type="text"
                name="startDate"
                value={formData.startDate}
                id={id + '-startDate'}
                onChange={handleChange}
                placeholder="DD/MM/YYYY"
            />
            <label htmlFor={id + '-endDate'}>End Date</label>
            <input 
                type="text"
                name="endDate"
                value={formData.endDate}
                id={id + '-endDate'}
                onChange={handleChange}
                placeholder="DD/MM/YYYY"
            />
            <label htmlFor={id + '-description'}>Description</label>
            <input 
                type="text"
                name="description"
                value={formData.description}
                id={id + '-description'}
                onChange={handleChange}
            />
            <label htmlFor={id + '-imageUrl'}>Image URL</label>
            <input 
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                id={id + '-imageUrl'}
                onChange={handleChange}
            />
            <button className="submit--button">Submit</button>
        </form>
    )
}