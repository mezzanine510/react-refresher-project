import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    // must be called on the top level of the component function
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        // console.log(selectedButton);
    }

    let tabContent = <p>Select a topic to see an example</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs buttons={
                <>
                    <TabButton isSelected={selectedTopic === 'components'}
                               onClick={() => handleSelect('components')}>
                        Components
                    </TabButton>

                    <TabButton isSelected={selectedTopic === 'jsx'}
                               onClick={() => handleSelect('jsx')}>
                        JSX
                    </TabButton>

                    <TabButton isSelected={selectedTopic === 'props'}
                               onClick={() => handleSelect('props')}>
                        Props
                    </TabButton>

                    <TabButton isSelected={selectedTopic === 'state'}
                               onClick={() => handleSelect('state')}>
                        State
                    </TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    )
}