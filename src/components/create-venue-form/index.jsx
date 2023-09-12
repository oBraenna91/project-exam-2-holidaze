import React from 'react';
import createVenue from '../../hooks/useCreateVenue';
import { useForm } from 'react-hook-form';

export function CreateVenueForm() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        const venueData = {
            name: data.name,
            description: data.description,
            media: data.media ? [data.media] : [], // Convert media to an array
            price: parseFloat(data.price), // Parse price as a float
            maxGuests: parseInt(data.maxGuests), // Parse maxGuests as an integer
            rating: 0, // Default rating value
            meta: {
              wifi: !!data.wifi, // Convert wifi to boolean
              parking: !!data.parking, // Convert parking to boolean
              breakfast: !!data.breakfast, // Convert breakfast to boolean
              pets: !!data.pets, // Convert pets to boolean
            },
            location: {
              address: data.address || 'Unknown',
              city: data.city || 'Unknown',
              zip: data.zip || 'Unknown',
              country: data.country || 'Unknown',
              continent: data.continent || 'Unknown',
              lat: 0, // Default lat value
              lng: 0, // Default lng value
            },
        }
        createVenue(venueData);
    }

    return (
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="m-auto">Venue info</h2>
            <input className="col-6 my-1 m-auto"
            placeholder="Name"
            {...register('name',{
                required: true,
                minLength: 3,
                maxLength: 30
            })}
            />
            <input className="col-6 my-1 m-auto"
            placeholder="Description"
            {...register('description',{
                required: true,
                minLength: 3,
                maxLength: 400
            })}
            />
            <input className="col-6 my-1 m-auto"
            placeholder="Max number of Guests"
            type="number"
            {...register('maxGuests', {
                required: true,
                min: 0,
                max: 9999
            })}
            />
            <input className="col-6 my-1 m-auto"
            placeholder="Price pr night"
            type="number"
            {...register('price', {
                required: true,
                min: 0,
                max: 9999
            })}
            />
            <div className="d-flex flex-column">
                <p className="m-auto">Wifi</p>
                <input className="col-6 my-1 m-auto"
                type="checkbox"
                {...register('wifi')}
                />
            </div>
            <div className="d-flex flex-column">
                <p className="m-auto">Parking</p>
                <input className="col-6 my-1 m-auto"
                type="checkbox"
                {...register('parking')}
                />
            </div>
            <div className="d-flex flex-column">
                <p className="m-auto">Breakfast</p>
                <input className="col-6 my-1 m-auto"
                type="checkbox"
                {...register('breakfast')}
                />
            </div>
            <div className="d-flex flex-column">
                <p className="m-auto">Pets allowed</p>
                <input className="col-6 my-1 m-auto"
                type="checkbox"
                {...register('pets')}
                />
            </div>
            <h2 className="m-auto">Location info</h2>
            <input className="col-6 my-1 m-auto"
            placeholder="Address"
            {...register('address',{
                minLength: 3,
                maxLength: 90
            })}
            />
            <input className="col-6 my-1 m-auto"
            placeholder="City"
            {...register('city',{
                minLength: 3,
                maxLength: 30
            })}
            />
            <input className="col-6 my-1 m-auto"
            placeholder="Zip Code"
            {...register('zip',{
                minLength: 2,
                maxLength: 15
            })}
            />
            <input className="col-6 my-1 m-auto"
            placeholder="Country"
            {...register('country',{
                minLength: 3,
                maxLength: 30
            })}
            />
            <input className="col-6 my-1 m-auto"
            placeholder="Continent"
            {...register('continent',{
                minLength: 3,
                maxLength: 30
            })}
            />
            <h2 className="m-auto mb-3">Media</h2>
            <input className="col-6 my-1 m-auto"
            placeholder="Media URL"
            {...register('media',{
                minLength: 3,
                maxLength: 500
            })}
            />
            <input className="bg-secondary rounded-pill col-4 m-auto mt-3 form-button" type="submit" />
        </form>
    )
}

export default CreateVenueForm;