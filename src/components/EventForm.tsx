import { DatePicker, Form, Input, Button, Row, Select } from 'antd';
import React, { FC, useState } from 'react';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { Dayjs } from 'dayjs';
import { formatDate } from '../utils/date';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface EventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void;
};

const EventForm: FC<EventFormProps> = (props) => {

    const [event, setEvent] = useState<IEvent>({
        author: "",
        date: "",
        description: "",
        guest: "",
    } as IEvent);
    const {username} = useTypedSelector(state => state.auth.user);

    const selectDate = (date: Dayjs | null) => {
        if(date) {
            setEvent({...event, date: formatDate(date?.toDate())});
        }
        
    };
    const submitForm = () => {
        props.submit({...event, author: username});
        
    };

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.require()]}
            >
                <Input value={event.description} onChange={(e) => setEvent({...event, description: e.target.value})}/>
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.require(), rules.isDateAfter("Нельзя выбрать прошедшую дату")]}
            >
                <DatePicker 
                    onChange={(date) => selectDate(date)}
                />
            </Form.Item>
            <Form.Item
                label="Пригласите гостя"
                name="ghuest"
                rules={[rules.require()]}
            >
                <Select onChange={(guest: string) => setEvent({...event, guest})}>
                    {props.guests.map(guest => 
                        <Select.Option value={guest.username} key={guest.username}>
                            {guest.username}
                        </Select.Option>)}
                </Select>
            </Form.Item>
            <Row justify="center">
                <Form.Item>
                    <Button type="primary" htmlType="submit" >
                        Создать событие
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    )
};

export default EventForm;