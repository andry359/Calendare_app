import { Button, Layout, Modal, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const Event: FC = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const {fetchGuests, createEvent, fetchEvents} = useActions();
    const {guests, events} = useTypedSelector(state => state.event);
    const {username} = useTypedSelector(state => state.auth.user);
    
    useEffect(() => {
        fetchGuests();
        fetchEvents(username);
    }, []);

    const addNewEvent = (event: IEvent) => {
        createEvent(event);
        setModalVisible(false);

    };

    return (
        <Layout style={{padding: "3%"}}>
            <EventCalendar event={events}/>
            <Row justify="center" >
                <Button style={{marginTop: "3%"}} onClick={() => setModalVisible(true)}>Добавить событие</Button>
            </Row>
            <Modal
                title="Добавить событие"
                open={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm guests={guests} submit={addNewEvent}/>
            </Modal>
        </Layout>
    )
};

export default Event;