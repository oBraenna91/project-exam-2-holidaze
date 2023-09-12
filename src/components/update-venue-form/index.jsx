import React from 'react';
import { useForm } from 'react-hook-form';

export function UpdateVenueForm({ initialValues, onSubmit }) {
    const { register, handleSubmit } = useForm({defaultValues: initialValues});


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
            <textarea className="col-6 my-1 m-auto"
            placeholder="Description"
            {...register('description',{
                required: true,
                minLength: 3,
                maxLength: 400
            })}
            rows={7}
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
                {...register('meta.wifi')}
                />
            </div>
            <div className="d-flex flex-column">
                <p className="m-auto">Parking</p>
                <input className="col-6 my-1 m-auto"
                type="checkbox"
                {...register('meta.parking')}
                />
            </div>
            <div className="d-flex flex-column">
                <p className="m-auto">Breakfast</p>
                <input className="col-6 my-1 m-auto"
                type="checkbox"
                {...register('meta.breakfast')}
                />
            </div>
            <div className="d-flex flex-column">
                <p className="m-auto">Pets allowed</p>
                <input className="col-6 my-1 m-auto"
                type="checkbox"
                {...register('meta.pets')}
                />
            </div>
            <h2 className="m-auto">Location info</h2>
            <input className="col-6 my-1 m-auto"
            placeholder="Address"
            {...register('location.address',{
                minLength: 0,
                maxLength: 90
            })}
            />
            <input className="col-6 my-1 m-auto"
            placeholder="City"
            {...register('location.city',{
                minLength: 0,
                maxLength: 30
            })}
            />
            <input className="col-6 my-1 m-auto"
            placeholder="Zip Code"
            {...register('location.zip',{
                minLength: 0,
                maxLength: 15
            })}
            />
            <input className="col-6 my-1 m-auto"
            placeholder="Country"
            {...register('location.country',{
                minLength: 0,
                maxLength: 30
            })}
            />
            <input className="col-6 my-1 m-auto"
            placeholder="Continent"
            {...register('location.continent',{
                minLength: 0,
                maxLength: 30
            })}
            />
            <h2 className="m-auto mb-3">Media</h2>
            <input className="col-6 my-1 m-auto"
            placeholder="Media URL"
            {...register('media[0]',{
                minLength: 0,
                maxLength: 500
            })}
            />
            <input className="bg-secondary rounded-pill col-4 m-auto my-3 form-button" type="submit" />
        </form>
    )
}

export default UpdateVenueForm;