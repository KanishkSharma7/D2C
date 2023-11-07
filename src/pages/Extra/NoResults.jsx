import React from 'react'
import { RiSearchLine } from 'react-icons/ri';

const NoResults = () => {
    return (
        <>
           <body class="body" style={{backgroundColor:"#f3f3f3"}}>
                <div class="overflow-hidden"> 

                <div class="hero_no_results">
			    <div class="container">
			        <div class="space-y-20">
			            <div class="box search__box">
			                <RiSearchLine/>
			            </div>
			            <h1 class="text-center hero__title">Sorry, we couldn’t find any results for this search.</h1>
			            <p class="text-center hero__desc">Maybe give one of these a try?</p>
			            <div class="box input__box d-flex align-items-center space-x-20">
			                <input type="text" class="form-control" placeholder="Enter your search..." />
									<div><Link to="#" class="btn btn-grad"><RiSearchLine />Search</Link></div>
			            </div>
			        </div>
			        </div>
			    </div>

                </div>
            </body>
        </>
    )
}

export default NoResults
