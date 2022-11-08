import { useEffect, useState } from "react";
import axios from "axios";


export default function News(){
    return(<div>
        <h1>News</h1>
        <h3>Add a news</h3>
        <div>
            <form className="admin-form-tour">
                <div className="admin-form-news-field">
                    <div className="admin-form-news-field-label"><span>Title :</span></div>
                    <div className="admin-form-news-field-input"><input className="admin-form-tour-field-elem-field" type="text" id="news_name" name="news_name" /></div>
                </div>
                <div className="admin-form-news-field">
                    <div className="admin-form-news-field-label"></div>
                    <div className="admin-form-news-field-input"><textarea className="admin-form-tour-field-elem-field" rows="20" id="news_content" name="news_content" /></div>
                </div>

                <div className="admin-form-news-field">
                    <div className="admin-form-news-field-label">Select a picture : </div>
                    <div className="admin-form-news-field-input"><input className="admin-form-tour-field-elem-field" type="file" accept=".jpg, .png" id="news_image" name="news_image" /></div>

                </div>

                <div className="admin-form-tour-submit">
                        <button>Submit</button> 
                </div>
            </form>
        </div>
    </div>)
}