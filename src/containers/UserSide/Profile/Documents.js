import React from 'react';
import {Icon} from 'antd';
import Dropzone from 'react-dropzone';

const Documents = ({documents, onDrop}) => {

    return (
        <div className='documents section'>
            <div className="block-title">
                Скани документів
                <Dropzone onDrop={onDrop}>
                    {({getRootProps, getInputProps, isDragActive}) => {
                        return (
                            <div
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                <button className='btn'>Додати документ</button>
                            </div>
                        )
                    }}
                </Dropzone>

            </div>

            <div className='documents-list'>
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div className='document'>
                        <label htmlFor="">Документ {i+1}</label>
                        <div className='default-img'>
                            {documents[i] ?
                                <img src={URL.createObjectURL(documents[i])} alt=""/>
                                :
                                <Icon type="camera" theme="filled"/>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Documents;