import React from 'react'

const lds = date => new Date(date).toLocaleDateString()
const usd = price => typeof price === 'number' ? (
  price.toLocaleString(undefined, {style: 'currency', currency: 'USD', minimumFractionDigits: 0})
) : price

const RenderMeta = object => (
  <ul>
    {!!object.status && (
      <li>Status: <b>{object.status}</b></li>
    )}
    {!!object.release_date && (
      <li><b>{lds(object.release_date)}</b></li>
    )}
    {!!object.birthday && (
      <li>
        <b>{object.deathday ? lds(object.birthday) + ' – ' + lds(object.deathday) : 'Born ' + lds(object.birthday)}</b>
      </li>
    )}
    {!!object.popularity && (
      <li>Popularity: <b>{object.popularity}</b></li>
    )}
    {!!object.number_of_seasons && !!object.number_of_episodes && (
      <li>Seasons: <b>{object.number_of_seasons}</b>, episodes total: <b>{object.number_of_episodes}</b></li>
    )}
    {!!object.runtime && (
      <li>Runtime: <b>{Math.floor(object.runtime / 60)}h {object.runtime % 60}m</b></li>
    )}
    {!!object.budget && (
      <li>
        Budget: <b>{usd(object.budget) ?? object.budget}</b>
      </li>
    )}
    {!!object.revenue && (
      <li>
        Revenue: <b>{usd(object.revenue) ?? object.revenue}</b>
      </li>
    )}
    {!!object.homepage && (
      <li><a href={object.homepage} target='_blank' rel='noopener noreferrer'>Homepage</a></li>
    )}
  </ul>
)

export default RenderMeta
