import React from "react";
import './assets/style.css'

export const GlobalStat = () => {
    return (
        <>
            <div className="small_informers">
                <div className="small_informer_container">
                    <div className="small_informer_digit">123</div>
                    <div className="small_informer_label">позитив</div>
                </div>
                <div className="small_informer_container">
                    <div className="small_informer_container">
                        <div className="small_informer_digit">123</div>
                        <div className="small_informer_label">позитив</div>
                    </div>
                </div>
                <div className="small_informer_container">
                    <div className="small_informer_container">
                        <div className="small_informer_digit">123</div>
                        <div className="small_informer_label">позитив</div>
                    </div>
                </div>
            </div>
        </>
    )
}