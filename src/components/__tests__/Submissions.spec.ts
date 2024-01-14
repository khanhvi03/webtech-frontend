import {describe, expect, it, vi} from 'vitest';
import {flushPromises, mount, shallowMount} from '@vue/test-utils';
import Submissions from '@/components/Submissions.vue';
import axios from "axios";
import {Submission} from "../../types";

describe('Testing Submissions.vue', () => {
    vi.mock('axios');

    const emptyResponse: Submission[] = []
    const twoSubmitResponse: Submission[] = [
        {
            id: 1,
            title: 'Test Submission',
            name: 'John Doe',
            email: 'john@example.com',
            content: 'Content 1',
            submitOn: '2022-01-01T12:34:56',
        },
        {
            id: 2,
            title: 'Title 2',
            name: 'Jane Do',
            email: 'jane@example.com',
            content: 'Content 2',
            submitOn: '2022-01-05T12:34:56',
        },
    ];


    it('should show page title of Submissions', () => {
        const wrapper = mount(Submissions)
        expect(wrapper.text()).toContain('Submissions')
    })


    it('should  render message when no submissions received from backend', async () => {
        vi.mocked(axios, true).get.mockResolvedValueOnce({ data: emptyResponse });

        const wrapper = shallowMount(Submissions);
        await flushPromises();

        expect(wrapper.text()).toContain('Loading...');
    });

    it('should render submissions from backend', async () => {
        vi.mocked(axios, true).get.mockResolvedValueOnce({ data: twoSubmitResponse });

        const wrapper = mount(Submissions);
        await flushPromises();

        expect(wrapper.text()).toContain('Test Submission');
        expect(wrapper.text()).toContain('John Doe');
        expect(wrapper.text()).toContain('Title 2')
        expect(wrapper.text()).toContain('Content 2')
    });


});
