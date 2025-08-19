'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

// Type definitions for better type safety
interface ElementInfo {
  id: string;
  className: string;
  classList: string[];
  innerHTML: string;
  outerHTML: string;
  textContent: string | null;
  innerText: string;
  attributes: Array<{ name: string; value: string }>;
  dataset: Record<string, string>;
  title: string;
  lang: string;
  dir: string;
  hidden: boolean;
  tabIndex: number;
}

interface StyleInfo {
  offsetHeight: number;
  offsetWidth: number;
  clientHeight: number;
  clientWidth: number;
  scrollHeight: number;
  scrollWidth: number;
  offsetTop: number;
  offsetLeft: number;
  scrollTop: number;
  scrollLeft: number;
  boundingRect: {
    top: number;
    left: number;
    width: number;
    height: number;
    bottom: number;
    right: number;
  };
}

interface RelationshipInfo {
  parentElement: {
    tagName: string | undefined;
    className: string | undefined;
  };
  children: {
    count: number;
    firstChild: string | undefined;
    lastChild: string | undefined;
  };
  childNodes: {
    count: number;
    firstChild: string | undefined;
    lastChild: string | undefined;
  };
  siblings: {
    nextSibling: string | undefined;
    previousSibling: string | undefined;
  };
  childInfo: {
    parentElement: string | undefined;
    nextSibling: string | undefined;
    previousSibling: string | undefined;
  };
}

interface FormInfo {
  input: {
    value: string;
    defaultValue: string;
    placeholder: string;
    type: string;
    name: string;
    disabled: boolean;
    readOnly: boolean;
    required: boolean;
    maxLength: number;
    minLength: number;
    pattern: string;
    size: number;
    validity: {
      valid: boolean;
      valueMissing: boolean;
      typeMismatch: boolean;
    };
    selectionStart: number | null;
    selectionEnd: number | null;
  };
  textarea: {
    value: string;
    defaultValue: string;
    placeholder: string;
    rows: number;
    cols: number;
    maxLength: number;
    minLength: number;
  };
  select: {
    value: string;
    selectedIndex: number;
    length: number;
    multiple: boolean;
    size: number;
  };
  checkbox: {
    note: string;
  };
  form: {
    length: number;
    method: string;
    action: string;
    enctype: string;
    target: string;
    noValidate: boolean;
  };
}

interface MediaInfo {
  video: {
    src: string;
    currentSrc: string;
    duration: number;
    currentTime: number;
    paused: boolean;
    ended: boolean;
    autoplay: boolean;
    loop: boolean;
    controls: boolean;
    volume: number;
    muted: boolean;
    playbackRate: number;
    readyState: number;
    networkState: number;
  };
  audio: {
    src: string;
    currentSrc: string;
    duration: number;
    currentTime: number;
    paused: boolean;
    ended: boolean;
    volume: number;
    muted: boolean;
    playbackRate: number;
  };
  canvas: {
    width: number;
    height: number;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    naturalWidth: number;
    naturalHeight: number;
    complete: boolean;
  };
}

interface AdvancedInfo {
  dialog: {
    open: boolean;
    returnValue: string;
  };
  details: {
    open: boolean;
  };
  table: {
    rows: number;
    tBodies: number;
    tHead: string;
    tFoot: string;
    caption: string;
  };
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            React useRef Examples
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive examples of useRef in React TypeScript
          </p>
        </div>

        <Tabs defaultValue="identification" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="identification">Identification</TabsTrigger>
            <TabsTrigger value="styling">Styling</TabsTrigger>
            <TabsTrigger value="relationships">Relationships</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="identification" className="mt-6">
            <IdentificationExamples />
          </TabsContent>

          <TabsContent value="styling" className="mt-6">
            <StylingExamples />
          </TabsContent>

          <TabsContent value="relationships" className="mt-6">
            <RelationshipExamples />
          </TabsContent>

          <TabsContent value="forms" className="mt-6">
            <FormExamples />
          </TabsContent>

          <TabsContent value="media" className="mt-6">
            <MediaExamples />
          </TabsContent>

          <TabsContent value="advanced" className="mt-6">
            <AdvancedExamples />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Identification & Content Examples
function IdentificationExamples() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [elementInfo, setElementInfo] = useState<Partial<ElementInfo>>({});

  const updateElementInfo = () => {
    if (elementRef.current) {
      setElementInfo({
        id: elementRef.current.id,
        className: elementRef.current.className,
        classList: Array.from(elementRef.current.classList),
        innerHTML: elementRef.current.innerHTML,
        outerHTML: elementRef.current.outerHTML,
        textContent: elementRef.current.textContent,
        innerText: elementRef.current.innerText,
        attributes: Array.from(elementRef.current.attributes).map(attr => ({
          name: attr.name,
          value: attr.value
        })),
        dataset: Object.fromEntries(Object.entries(elementRef.current.dataset).filter(([, value]) => value !== undefined)) as Record<string, string>,
        title: elementRef.current.title,
        lang: elementRef.current.lang,
        dir: elementRef.current.dir,
        hidden: elementRef.current.hidden,
        tabIndex: elementRef.current.tabIndex,
      });
    }
  };

  useEffect(() => {
    updateElementInfo();
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Element Identification & Content</CardTitle>
          <CardDescription>
            Demonstrating element identification properties and content access
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Button onClick={updateElementInfo}>Update Element Info</Button>
              
              <div
                ref={elementRef}
                id="demo-element"
                className="p-4 border-2 border-blue-300 rounded-lg bg-blue-50"
                title="Demo Element"
                lang="en"
                dir="ltr"
                data-custom="example"
                data-version="1.0"
              >
                <h3 className="text-lg font-semibold">Demo Element</h3>
                <p>This is a <strong>sample</strong> element with various attributes.</p>
                <span className="text-sm text-gray-600">Additional content</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Element Information:</h4>
              <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                <pre className="text-xs">
                  {JSON.stringify(elementInfo, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Styling Examples
function StylingExamples() {
  const styleRef = useRef<HTMLDivElement>(null);
  const [styleInfo, setStyleInfo] = useState<Partial<StyleInfo>>({});

  const updateStyleInfo = () => {
    if (styleRef.current) {
      const rect = styleRef.current.getBoundingClientRect();
      setStyleInfo({
        offsetHeight: styleRef.current.offsetHeight,
        offsetWidth: styleRef.current.offsetWidth,
        clientHeight: styleRef.current.clientHeight,
        clientWidth: styleRef.current.clientWidth,
        scrollHeight: styleRef.current.scrollHeight,
        scrollWidth: styleRef.current.scrollWidth,
        offsetTop: styleRef.current.offsetTop,
        offsetLeft: styleRef.current.offsetLeft,
        scrollTop: styleRef.current.scrollTop,
        scrollLeft: styleRef.current.scrollLeft,
        boundingRect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          bottom: rect.bottom,
          right: rect.right,
        }
      });
    }
  };

  const changeStyle = () => {
    if (styleRef.current) {
      styleRef.current.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
      styleRef.current.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
      updateStyleInfo();
    }
  };

  const scrollToElement = () => {
    styleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    updateStyleInfo();
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Styling & Dimensions</CardTitle>
          <CardDescription>
            Demonstrating style manipulation and dimension properties
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button onClick={changeStyle}>Change Style</Button>
                <Button onClick={scrollToElement}>Scroll to Element</Button>
                <Button onClick={updateStyleInfo}>Update Info</Button>
              </div>
              
              <div
                ref={styleRef}
                className="p-6 border-2 border-purple-300 rounded-lg bg-purple-50 transition-all duration-300"
                style={{ minHeight: '200px', overflow: 'auto' }}
              >
                <h3 className="text-lg font-semibold mb-4">Stylable Element</h3>
                <p className="mb-4">This element can be styled dynamically using refs.</p>
                <div className="h-32 bg-gray-200 rounded p-2 text-sm">
                  Scrollable content area to demonstrate scroll properties.
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="mb-2">Line {i + 1}: Lorem ipsum dolor sit amet</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Style Information:</h4>
              <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                <pre className="text-xs">
                  {JSON.stringify(styleInfo, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Relationship Examples
function RelationshipExamples() {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [relationshipInfo, setRelationshipInfo] = useState<Partial<RelationshipInfo>>({});

  const updateRelationshipInfo = () => {
    if (parentRef.current && childRef.current) {
      setRelationshipInfo({
        parentElement: {
          tagName: parentRef.current.parentElement?.tagName,
          className: parentRef.current.parentElement?.className,
        },
        children: {
          count: parentRef.current.children.length,
          firstChild: parentRef.current.firstElementChild?.tagName,
          lastChild: parentRef.current.lastElementChild?.tagName,
        },
        childNodes: {
          count: parentRef.current.childNodes.length,
          firstChild: parentRef.current.firstChild?.nodeName,
          lastChild: parentRef.current.lastChild?.nodeName,
        },
        siblings: {
          nextSibling: parentRef.current.nextElementSibling?.tagName,
          previousSibling: parentRef.current.previousElementSibling?.tagName,
        },
        childInfo: {
          parentElement: childRef.current.parentElement?.tagName,
          nextSibling: childRef.current.nextElementSibling?.tagName,
          previousSibling: childRef.current.previousElementSibling?.tagName,
        }
      });
    }
  };

  const addChild = () => {
    if (parentRef.current) {
      const newChild = document.createElement('div');
      newChild.className = 'p-2 bg-green-100 border border-green-300 rounded';
      newChild.textContent = `Child ${parentRef.current.children.length + 1}`;
      parentRef.current.appendChild(newChild);
      updateRelationshipInfo();
    }
  };

  const removeChild = () => {
    if (parentRef.current && parentRef.current.children.length > 0) {
      parentRef.current.removeChild(parentRef.current.lastElementChild!);
      updateRelationshipInfo();
    }
  };

  useEffect(() => {
    updateRelationshipInfo();
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>DOM Relationships</CardTitle>
          <CardDescription>
            Demonstrating parent-child and sibling relationships
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button onClick={addChild}>Add Child</Button>
                <Button onClick={removeChild}>Remove Child</Button>
                <Button onClick={updateRelationshipInfo}>Update Info</Button>
              </div>
              
              <div className="border-2 border-orange-300 rounded-lg p-4 bg-orange-50">
                <h4 className="font-semibold mb-2">Parent Element</h4>
                <div ref={parentRef} className="space-y-2">
                  <div ref={childRef} className="p-2 bg-blue-100 border border-blue-300 rounded">
                    First Child
                  </div>
                  <div className="p-2 bg-blue-100 border border-blue-300 rounded">
                    Second Child
                  </div>
                  <div className="p-2 bg-blue-100 border border-blue-300 rounded">
                    Third Child
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Relationship Information:</h4>
              <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                <pre className="text-xs">
                  {JSON.stringify(relationshipInfo, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Form Examples
function FormExamples() {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formInfo, setFormInfo] = useState<Partial<FormInfo>>({});

  const updateFormInfo = () => {
    if (inputRef.current && textareaRef.current && selectRef.current && formRef.current) {
      setFormInfo({
        input: {
          value: inputRef.current.value,
          defaultValue: inputRef.current.defaultValue,
          placeholder: inputRef.current.placeholder,
          type: inputRef.current.type,
          name: inputRef.current.name,
          disabled: inputRef.current.disabled,
          readOnly: inputRef.current.readOnly,
          required: inputRef.current.required,
          maxLength: inputRef.current.maxLength,
          minLength: inputRef.current.minLength,
          pattern: inputRef.current.pattern,
          size: inputRef.current.size,
          validity: {
            valid: inputRef.current.validity.valid,
            valueMissing: inputRef.current.validity.valueMissing,
            typeMismatch: inputRef.current.validity.typeMismatch,
          },
          selectionStart: inputRef.current.selectionStart,
          selectionEnd: inputRef.current.selectionEnd,
        },
        textarea: {
          value: textareaRef.current.value,
          defaultValue: textareaRef.current.defaultValue,
          placeholder: textareaRef.current.placeholder,
          rows: textareaRef.current.rows,
          cols: textareaRef.current.cols,
          maxLength: textareaRef.current.maxLength,
          minLength: textareaRef.current.minLength,
        },
        select: {
          value: selectRef.current.value,
          selectedIndex: selectRef.current.selectedIndex,
          length: selectRef.current.length,
          multiple: selectRef.current.multiple,
          size: selectRef.current.size,
        },
        checkbox: {
          // Note: shadcn Checkbox component doesn't expose these properties directly
          // These would be available on a native HTML input element
          note: "Checkbox properties are handled by shadcn/ui component"
        },
        form: {
          length: formRef.current.length,
          method: formRef.current.method,
          action: formRef.current.action,
          enctype: formRef.current.enctype,
          target: formRef.current.target,
          noValidate: formRef.current.noValidate,
        }
      });
    }
  };

  const selectInputText = () => {
    inputRef.current?.select();
  };

  const setSelectionRange = () => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(0, 5);
    }
  };

  const checkValidity = () => {
    const isValid = formRef.current?.checkValidity();
    alert(`Form validity: ${isValid}`);
  };

  const resetForm = () => {
    formRef.current?.reset();
    updateFormInfo();
  };

  useEffect(() => {
    updateFormInfo();
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Form Elements</CardTitle>
          <CardDescription>
            Demonstrating form element properties and methods
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Button onClick={selectInputText}>Select Input Text</Button>
                <Button onClick={setSelectionRange}>Set Selection (0-5)</Button>
                <Button onClick={checkValidity}>Check Validity</Button>
                <Button onClick={resetForm}>Reset Form</Button>
                <Button onClick={updateFormInfo}>Update Info</Button>
              </div>
              
              <form ref={formRef} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Input Field</label>
                  <Input
                    ref={inputRef}
                    type="text"
                    name="demo-input"
                    placeholder="Enter some text"
                    defaultValue="Default value"
                    maxLength={50}
                    minLength={3}
                    pattern="[A-Za-z0-9]+"
                    required
                    onChange={updateFormInfo}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Textarea</label>
                  <Textarea
                    ref={textareaRef}
                    placeholder="Enter multiline text"
                    defaultValue="Default textarea content"
                    rows={4}
                    maxLength={200}
                    onChange={updateFormInfo}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Select</label>
                  <Select onValueChange={updateFormInfo}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="demo-checkbox"
                    onCheckedChange={updateFormInfo}
                  />
                  <label htmlFor="demo-checkbox" className="text-sm font-medium">
                    Checkbox option
                  </label>
                </div>
              </form>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Form Information:</h4>
              <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                <pre className="text-xs">
                  {JSON.stringify(formInfo, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Media Examples
function MediaExamples() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [mediaInfo, setMediaInfo] = useState<Partial<MediaInfo>>({});

  const updateMediaInfo = () => {
    if (videoRef.current && audioRef.current && canvasRef.current && imageRef.current) {
      setMediaInfo({
        video: {
          src: videoRef.current.src,
          currentSrc: videoRef.current.currentSrc,
          duration: videoRef.current.duration,
          currentTime: videoRef.current.currentTime,
          paused: videoRef.current.paused,
          ended: videoRef.current.ended,
          autoplay: videoRef.current.autoplay,
          loop: videoRef.current.loop,
          controls: videoRef.current.controls,
          volume: videoRef.current.volume,
          muted: videoRef.current.muted,
          playbackRate: videoRef.current.playbackRate,
          readyState: videoRef.current.readyState,
          networkState: videoRef.current.networkState,
        },
        audio: {
          src: audioRef.current.src,
          currentSrc: audioRef.current.currentSrc,
          duration: audioRef.current.duration,
          currentTime: audioRef.current.currentTime,
          paused: audioRef.current.paused,
          ended: audioRef.current.ended,
          volume: audioRef.current.volume,
          muted: audioRef.current.muted,
          playbackRate: audioRef.current.playbackRate,
        },
        canvas: {
          width: canvasRef.current.width,
          height: canvasRef.current.height,
        },
        image: {
          src: imageRef.current.src,
          alt: imageRef.current.alt,
          width: imageRef.current.width,
          height: imageRef.current.height,
          naturalWidth: imageRef.current.naturalWidth,
          naturalHeight: imageRef.current.naturalHeight,
          complete: imageRef.current.complete,
        }
      });
    }
  };

  const playVideo = () => {
    videoRef.current?.play();
    updateMediaInfo();
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
    updateMediaInfo();
  };

  const playAudio = () => {
    audioRef.current?.play();
    updateMediaInfo();
  };

  const pauseAudio = () => {
    audioRef.current?.pause();
    updateMediaInfo();
  };

  const drawOnCanvas = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 50%)`;
        ctx.fillRect(Math.random() * 200, Math.random() * 100, 50, 50);
      }
    }
  };

  useEffect(() => {
    updateMediaInfo();
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Media Elements</CardTitle>
          <CardDescription>
            Demonstrating video, audio, canvas, and image element properties
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Button onClick={playVideo}>Play Video</Button>
                <Button onClick={pauseVideo}>Pause Video</Button>
                <Button onClick={playAudio}>Play Audio</Button>
                <Button onClick={pauseAudio}>Pause Audio</Button>
                <Button onClick={drawOnCanvas}>Draw on Canvas</Button>
                <Button onClick={updateMediaInfo}>Update Info</Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Video Element</h4>
                  <video
                    ref={videoRef}
                    className="w-full max-w-md border rounded"
                    controls
                    onLoadedMetadata={updateMediaInfo}
                    onTimeUpdate={updateMediaInfo}
                  >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Audio Element</h4>
                  <audio
                    ref={audioRef}
                    className="w-full"
                    controls
                    onLoadedMetadata={updateMediaInfo}
                    onTimeUpdate={updateMediaInfo}
                  >
                    <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Canvas Element</h4>
                  <canvas
                    ref={canvasRef}
                    width="300"
                    height="150"
                    className="border rounded bg-white"
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Image Element</h4>
                  <Image
                    ref={imageRef}
                    src="https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Demo+Image"
                    alt="Demo image"
                    width={300}
                    height={200}
                    className="border rounded"
                    onLoad={updateMediaInfo}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Media Information:</h4>
              <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                <pre className="text-xs">
                  {JSON.stringify(mediaInfo, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Advanced Examples
function AdvancedExamples() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const [advancedInfo, setAdvancedInfo] = useState<Partial<AdvancedInfo>>({});

  const updateAdvancedInfo = () => {
    if (dialogRef.current && detailsRef.current && tableRef.current) {
      setAdvancedInfo({
        dialog: {
          open: dialogRef.current.open,
          returnValue: dialogRef.current.returnValue,
        },
        details: {
          open: detailsRef.current.open,
        },
        table: {
          rows: tableRef.current.rows.length,
          tBodies: tableRef.current.tBodies.length,
          tHead: tableRef.current.tHead ? 'Present' : 'None',
          tFoot: tableRef.current.tFoot ? 'Present' : 'None',
          caption: tableRef.current.caption ? 'Present' : 'None',
        }
      });
    }
  };

  const showDialog = () => {
    dialogRef.current?.show();
    updateAdvancedInfo();
  };

  const showModalDialog = () => {
    dialogRef.current?.showModal();
    updateAdvancedInfo();
  };

  const closeDialog = () => {
    dialogRef.current?.close('User closed dialog');
    updateAdvancedInfo();
  };

  const toggleDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.open = !detailsRef.current.open;
      updateAdvancedInfo();
    }
  };

  const addTableRow = () => {
    if (tableRef.current) {
      const newRow = tableRef.current.insertRow();
      const cell1 = newRow.insertCell();
      const cell2 = newRow.insertCell();
      const cell3 = newRow.insertCell();
      cell1.textContent = `Row ${tableRef.current.rows.length}`;
      cell2.textContent = `Data ${tableRef.current.rows.length}`;
      cell3.textContent = `Value ${tableRef.current.rows.length}`;
      updateAdvancedInfo();
    }
  };

  const removeTableRow = () => {
    if (tableRef.current && tableRef.current.rows.length > 1) {
      tableRef.current.deleteRow(tableRef.current.rows.length - 1);
      updateAdvancedInfo();
    }
  };

  useEffect(() => {
    updateAdvancedInfo();
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Advanced Elements</CardTitle>
          <CardDescription>
            Demonstrating dialog, details, and table element properties
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Button onClick={showDialog}>Show Dialog</Button>
                <Button onClick={showModalDialog}>Show Modal</Button>
                <Button onClick={closeDialog}>Close Dialog</Button>
                <Button onClick={toggleDetails}>Toggle Details</Button>
                <Button onClick={addTableRow}>Add Row</Button>
                <Button onClick={removeTableRow}>Remove Row</Button>
                <Button onClick={updateAdvancedInfo}>Update Info</Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Dialog Element</h4>
                  <dialog ref={dialogRef} className="rounded-lg p-6 backdrop:bg-black/50">
                    <h3 className="text-lg font-semibold mb-2">Dialog Title</h3>
                    <p className="mb-4">This is a dialog element with ref access.</p>
                    <div className="flex gap-2">
                      <Button onClick={closeDialog}>Close</Button>
                    </div>
                  </dialog>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Details Element</h4>
                  <details ref={detailsRef} className="border rounded p-4">
                    <summary className="cursor-pointer font-semibold">Click to expand</summary>
                    <p className="mt-2">This is the content inside the details element.</p>
                  </details>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Table Element</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Row</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Row 1</TableCell>
                        <TableCell>Data 1</TableCell>
                        <TableCell>Value 1</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Advanced Information:</h4>
              <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                <pre className="text-xs">
                  {JSON.stringify(advancedInfo, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
