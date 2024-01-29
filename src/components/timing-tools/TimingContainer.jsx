import TextField from '@mui/material/TextField';
import React, {useState, useEffect, useContext} from 'react';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import {TimingToolsContext} from '../../context/index';

export const DEFAULT_BPM = 120;
export const DEFAULT_BAR = 4;


export default function TimingContainer(){
    const {bar, setBar, bpm, setBPM, timeoutBars, setTimeout} = useContext(TimingToolsContext);

    return (
        <div className="timing-tools">
            <Button color="primary" sx={ { borderRadius: 28, background: "#FFFFFF" } } onClick={()=>{
                setBar(bar + 1);
            }}>+</Button>
            <TextField
            label="Bars"
            value={`${bar}`}
            onChange={event =>{
                const inputValue = parseInt(event.target.value, '');
                setBar( ()=> {
                    if (Number.isInteger(inputValue)){
                        return inputValue > 0 ? inputValue : DEFAULT_BAR;
                    }
                    else{
                        return "";
                    }
                })
            }}
            InputProps={{
                endAdornment: <InputAdornment position="end">/4</InputAdornment>,
            }}
            />
            <Button color="primary" sx={ { borderRadius: 28, background: "#FFFFFF" } } onClick={()=>{
                setBar(bar > 1 ? bar - 1 : 1);
            }}>-</Button>
            <div>
            <TextField
            label="BPM"
            value={`${bpm}`}
            onChange={event =>{
                const inputValue = parseInt(event.target.value, '');
                setBPM( ()=> {
                    if (Number.isInteger(inputValue)){
                        return inputValue > 0 ? inputValue : DEFAULT_BPM;
                    }
                    else{
                        return "";
                    }
                })
            }}
            />
            </div>
            <div>
            <TextField
            label="Timeout"
            value={`${timeoutBars}`}
            onChange={event =>{
                const inputValue = parseInt(event.target.value, '');
                setTimeout( ()=> {
                    if (Number.isInteger(inputValue)){
                        return inputValue >= 0 ? inputValue : DEFAULT_BAR;
                    }
                    else{
                        return "";
                    }
                })
            }}
            InputProps={{
                endAdornment: <InputAdornment position="end">Bars</InputAdornment>,
            }}
            />
            </div>
        </div>
    );
}