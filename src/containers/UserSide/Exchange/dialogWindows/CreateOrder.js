import React, {useState} from 'react';
import {Select, Icon} from 'antd';
import Dropzone from 'react-dropzone';

const Option = Select.Option;

const CreateOrder = ({onCreateOrder, type}) => {
    const [image, setImage] = useState({});
    const [file, setFile] = useState({});

    const onDrop = (acceptedFiles, type) => {
        if (type === 'img') {
            setImage(acceptedFiles[0])
        } else if (type === 'file') {
            setFile(acceptedFiles[0])
        }
    };

    if (type === 'buy') {
        return (
            <div className='create-order buy'>
                <div className='window-title'>Створення замовлення на купівлю</div>

                <div className='modal-form'>
                    <div className='first-column column'>
                        <div className="form-item">
                            <label htmlFor="">Сировина</label>
                            <Select>
                                <Option value='1'>Name</Option>
                            </Select>
                        </div>
                        <div className="form-item">
                            <label htmlFor="">Одиниця виміру</label>
                            <Select>
                                <Option value='1'>T</Option>
                            </Select>
                        </div>
                        <div className="form-item">
                            <label htmlFor="">Категорія</label>
                            <Select>
                                <Option value='1'>name</Option>
                            </Select>
                        </div>
                        <div className="form-item">
                            <label htmlFor="">Об'єм</label>
                            <input type="text"/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="">Вартість</label>
                            <input type="text"/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="">Максимальна вартість доставки</label>
                            <input type="text"/>
                        </div>
                    </div>

                    <div className='second-column column'>
                        <div className="form-item commission">
                            <label htmlFor="">Розмір комісії біржі</label>
                            <input type="text" disabled/>
                            <span>
                                На вашому рахунку наразі 5693 грн
                            </span>
                        </div>
                    </div>
                </div>

                <button className='btn' onClick={onCreateOrder}>
                    Підтвердити <Icon type="arrow-right"/>
                </button>
            </div>
        )
    } else if (type === 'sell') {
        return (
            <div className='create-order sell'>
                <div className='window-title'>Створення запиту на продаж</div>

                <div className='modal-form'>
                    <div className='first-column column'>
                        <div className="form-item">
                            <label htmlFor="">Сировина</label>
                            <Select>
                                <Option value='1'>Name</Option>
                            </Select>
                        </div>
                        <div className="form-item">
                            <label htmlFor="">Одиниця виміру</label>
                            <Select>
                                <Option value='1'>T</Option>
                            </Select>
                        </div>
                        <div className="form-item">
                            <label htmlFor="">Категорія</label>
                            <Select>
                                <Option value='1'>name</Option>
                            </Select>
                        </div>
                        <div className="form-item">
                            <label htmlFor="">Об'єм</label>
                            <input type="text"/>
                        </div>
                    </div>

                    <div className='second-column column'>
                        <div className='select-image'>
                            <label htmlFor="">Зображення товару</label>
                            <Dropzone onDrop={(e) => onDrop(e, 'img')}>
                                {({getRootProps, getInputProps, isDragActive}) => {
                                    return (
                                        <div
                                            {...getRootProps()}
                                        >
                                            <input {...getInputProps()} />

                                            <div className='default-img'>
                                                {image.name ?
                                                    <img src={URL.createObjectURL(image)} alt=""/>
                                                    :
                                                    <Icon type="camera" theme="filled"/>
                                                }
                                            </div>

                                            <button className='btn drop-btn'>
                                                <span>{image.name ? image.name : 'Обрати файл'}</span>
                                            </button>
                                        </div>
                                    )
                                }}
                            </Dropzone>
                        </div>

                        <div className='select-file'>
                            <label htmlFor="">Додати сертифікат</label>

                            <div className='dropzone-block'>
                                <Icon type="file-pdf"/>
                                <Dropzone onDrop={(e) => onDrop(e, 'file')}>
                                    {({getRootProps, getInputProps, isDragActive}) => {
                                        return (
                                            <div
                                                {...getRootProps()}
                                            >
                                                <input {...getInputProps()} />
                                                <button className='btn drop-btn'>
                                                    <span>{file.name ? file.name : 'Обрати файл'}</span>
                                                </button>
                                            </div>
                                        )
                                    }}
                                </Dropzone>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='total-price'>
                    <div className="form-item">
                        <label htmlFor="">Вартість</label>
                        <input type="text"/>
                    </div>

                    <div className="form-item commission">
                        <label htmlFor="">Розмір комісії біржі</label>
                        <input type="text" disabled/>
                        <span>
                                На вашому рахунку наразі 5693 грн
                            </span>
                    </div>
                </div>

                <button className='btn' onClick={onCreateOrder}>
                    Підтвердити <Icon type="arrow-right"/>
                </button>
            </div>
        )

    }
}

export default CreateOrder;